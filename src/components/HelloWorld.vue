<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <h1>内存管理项目</h1>
         
      </el-header>
      <el-container>
        <el-container>
          <el-main class="main" height="500px">
            <div class="page_table">
              <h2>页表项区</h2>
              <div v-for="row in 2" v-bind:key="row">
                <label v-for="col in this.number_page / 2" v-bind:key="col" class="page_table_label">
                  {{ col-1+(row-1) *this.number_page / 2 }}
                  <el-button type="primary" disabled class="pagetable_button">
                  {{
                    this.page_table[col-1 +(row-1) *this.number_page / 2].content
                  }}
                  </el-button>
                </label>
              </div>
            </div>
            <div class="info">
        <div class="info1">
          <h2>执行区</h2>
          <el-button type="success" @click="next" :disabled='this.timer!=null'>逐步执行</el-button>
          <el-button type="success" @click="autonext">连续执行</el-button>
            
            <ol>
                <li>
                    <p><b>当前执行指令</b>为{{this.ins_count>0 ? this.cur_instru: "  null"}}</p>
                </li>
                <li>
                    <p><b>当前执行情况：</b></p>
                    <p v-if="this.cur_flag">指令所在页已在主存块中，位于主存块
                      {{this.page_table[parseInt(this.cur_instru/10)].content}}中，地址为{{this.cur_address}}</p>
                    <!-- 此时没有命中且内存块已满 -->
                    <p v-else-if="this.buffer_list.length() == this.memory_buffer.length &&this.buffer_move_out!=-1">
                      指令所在页不在主存块中，调出主存块{{this.ins_count>0 ?this.buffer_move_out : "NaN"}}中的页</p>
                    <!-- 此时没有命中且内存块未满 -->
                    <p v-else-if="this.ins_count>0">指令所在页不在主存块中，直接顺序插入下一主存块</p>
                    <p v-else> 待执行</p>
                </li>
                <li>
                    <p><b>缺页率</b>=缺页数{{this.miss_count}}/执行总数{{this.ins_count}}=
                    {{ Number((this.miss_count / this.ins_count)*100).toFixed(1) + '%'}}</p>
                    
                </li>
            </ol>
        </div>
        
        <div class="info2">
            <h2>主存块</h2>
            <ul>
                <li>
                  <label>{{ this.memory_buffer[0].id}}
                    <el-button type="warning" disabled style="width: 60px;">{{this.memory_buffer[0].content }}
                    </el-button>
                  </label>
                </li>
                <li>
                    <label>{{ this.memory_buffer[1].id}}
                    <el-button type="warning" disabled style="width: 60px;">{{this.memory_buffer[1].content }}
                    </el-button>
                  </label>
                </li>

                 <li>
                    <label>{{ this.memory_buffer[2].id}}
                    <el-button type="warning" disabled style="width: 60px;">{{this.memory_buffer[2].content }}
                    </el-button>
                  </label>
                </li>
                 <li>
                    <label>{{ this.memory_buffer[3].id}}
                    <el-button type="warning" disabled style="width: 60px;">{{this.memory_buffer[3].content }}
                    </el-button>
                  </label>
                </li>
            </ul>
        </div>
    </div>


          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import linklist from '../linklist.js'
export default {
  data() {
    return {
      cur_instru:-1,  //当前执行的指令
      cur_flag:false, //当前执行的指令查找在主存的情况
      number_ins: 320, //总指令条数
      number_page: 32, //页表中的位数
      number_buffer: 4, //buffer区的大小
      ins_count: 0, //执行指令计数器,其值表示下一个将要执行的位置
      miss_count: 0, //缺页计数器
      memory_buffer: [], //主存中的buffer
      buffer_list:new linklist(), //根据LRU算法实时更新的执行情况
      instru_sequence: [], //指令执行顺序数组
      page_table: [], //页表
      buffer_move_out:-1, //被调出的主存块
      page_move_in:-1,  //被调入页
      timer:null,
      cur_address:-1,  //对于当前命中的指令，对应主存块中的地址
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      //初始化buffer
      let ran_array = this.randomNums(this.number_buffer, 1, 10); //获取长度为4随机数数组，作为随机的物理地址
      ran_array = ran_array.map(this.f_big); //放大间隔为10
      for (let i = 0; i < this.number_buffer; i++) {
        let elem = { id: i, content: "null", start_address: i*10 };
        this.memory_buffer.push(elem);
      }
      //初始化页表，含有32项
      for (let i = 0; i < this.number_page; i++) {
        let elem = { id: i, content: "null" }; //逻辑页和物理块
        this.page_table.push(elem);
      }
      //初始化指令执行顺序
      let m = this.number_ins - 1; //初始化中第一个地址开始前地址操作
      let count = 0;
      while (count < this.number_ins) {
        let m1 = this.randomNums(1, 0, m); //前地址
        this.instru_sequence.push(m1);
        this.instru_sequence.push(m1 + 1); //顺序执行
        let m2 = this.randomNums(1, m1 + 2, this.number_ins - 1);
        this.instru_sequence.push(m2); //后地址
        this.instru_sequence.push(m2 + 1); //顺序执行
        m = m2 + 1; //更新m值
        count += 4;
      }
    },
    //获取当前页面是否在主存中，若不在返回-1，若在则返回主存的物理页
    isStored(id) {
      return this.page_table[id].content != "null" ? this.page_table[id].content :-1
    }, //判断是否在主存中
    //逐步执行按钮，执行下一条指令
    next() {
      this.cur_instru = this.instru_sequence[this.ins_count]
      let current = parseInt(this.cur_instru /10) //获取当前应执行指令，除以10获得当前逻辑页
      this.page_move_in = current;  //将调入的页
      let id = this.isStored(current)  //获取当前页面是否在主存中,若在，则返回物理内存块
      this.ins_count++  //每次访问后，将指针后移
      if(id == -1 && this.buffer_list.length() < this.memory_buffer.length){ //未命中，主存未满
        this.cur_flag = false;
        this.miss_count++;
        let pos = this.buffer_list.length()         //主存块pos发生改变
        //this.cur_address = this.memory_buffer[pos].start_address + this.cur_instru%10  //计算当前指令存放的地址
        this.memory_buffer[pos].content = current;  //修改主存块
        this.buffer_list.insertHead(pos)  //初始有空时，顺序插入
        this.page_table[current].content = pos;   //修改页表项
      }
      else if(id == -1&&this.buffer_list.length() == this.memory_buffer.length){//未命中，主存满,则需调页
        this.cur_flag = false;  
        this.miss_count++;
        this.buffer_move_out = this.buffer_list.deleteLast();
        this.buffer_list.insertHead(this.buffer_move_out); //修改访问记录的list
        let old = this.memory_buffer[this.buffer_move_out].content  //修改前主存块中存储的页表位置
        this.memory_buffer[this.buffer_move_out].content = current; //修改主存块
        this.page_table[old].content = "null";                     //修改页表项：减去
        this.page_table[current].content = this.buffer_move_out;   //修改页表项：新增
        //this.cur_address = this.memory_buffer[this.buffer_move_out].start_address + this.cur_instru%10  //计算当前指令存放的地址
      } 
      else{//命中
        this.cur_flag = true;
        let index = this.buffer_list.findIndex(id);
        this.buffer_list.movetoHead(index);
        this.cur_address = this.memory_buffer[id].start_address + this.cur_instru%10  //计算当前指令存放的地址
      }
    },
    autonext(){  //自动执行
      if(this.timer == null){
        this.timer = setInterval(this.autonext,2000)
      }
      else{
        if(this.ins_count ==this.number_ins){
          clearInterval(this.timer)
          this.timer=null
          return;
        }
        this.next();
      }
    },

    //辅助随机函数
    randomNums(n, min, max) {
      if (n == 1) {
        return Math.ceil(Math.random() * (max - min) + min);
      }
      var arr = [];
      for (let i = 0; i < n; i++) {
        var ran = Math.ceil(Math.random() * (max - min) + min);
        while (this.isExist(arr, ran)) {
          ran = Math.ceil(Math.random() * (max - min) + min);
        }
        arr[i] = ran;
      }
      return arr;
    },

    isExist(arr, ran) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ran) {
          return true;
        }
      }
      return false;
    },
    f_big(value) {
      return value * 10;
    },
  },
};
</script>

<style>
.header {
  background-color: #79bbff;
}
.main {
  background-color: #d9ecff;
}
.aside {
  background-color: #a0cfff;
}
.pagetable_button {
  width: 40px;
  margin: 5px;
  padding: 10px;
  background-color: #24282c;
}
.page_table_label{
  width: 50px;
  display: inline-block;
}
/* 中间左右部分 */
.info{
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}
.info1:nth-of-type(1) {
    width: 48%;
    float: left;
    border: 2px solid purple;
    padding: 3px;
    margin-top: 5px;
  }
  
.info2:nth-of-type(2) {
    width: 48%;
    float: right;
    margin-top: 5px;
    border: 2px solid purple;
    padding: 3px;
}


.info2 ul {
    /* 清除ul标签的默认样式 */
    width: auto;/*宽度也改为自动*/
    list-style-type: none;
    white-space:nowrap;
    overflow: hidden;
    margin-left: 2%;
    /* margin-top: 0;          */
    padding: 0;
}
.info2 ul li{
  margin: 5px;
  padding: 10px;
}
</style>
