// const data = new Data(document.getElementById('login-form'));
const data = [
  {
    "name": "座敷童子",
    "img": "鬼怪\\座敷童子.png",
    "team": "blue",
    "Ttask": ["Male","Male","Female","Baby","Old"],
    "repeat": true,
    "order": false,
    "task": ["開朗","天真","樂觀"],
    "trial": "heaven",
    "story": "人們為了減輕家裡負擔，將多出來的小孩用石臼壓死"
  },
  {
    "name": "河童",
    "img": "鬼怪\\河童.png",
    "team": "blue",
    "Ttask": ["Male","Male","Female","Baby","Old"],
    "repeat": true,
    "order": false,
    "task": ["殘忍","毒辣"],
    "trial": "hell",
    "story": "被拋棄在河川裡的兒童屍體"
  },
  {
    "name": "唐傘小僧",
    "img": "鬼怪\\唐傘小僧.png",
    "team": "blue",
    "Ttask": ["Male","Male","Female","Baby","Old"],
    "repeat": true,
    "order": false,
    "task": ["座敷童子"],
    "trial": null,
    "story": "放置100年後變化而成"
  },
  {
    "name": "貘",
    "img": "鬼怪\\貘.png",
    "team": "blue",
    "Ttask": ["Male","Male","Female","Baby","Old"],
    "repeat": true,
    "order": false,
    "task": ["貓又"],
    "trial": null,
    "story": "吸食人們的噩夢為生"
  },
  {
    "name": "姑獲鳥",
    "img": "鬼怪\\姑獲鳥.png",
    "team": "blue",
    "Ttask": ["Male","Male","Female","Baby","Old"],
    "repeat": true,
    "order": false,
    "task": ["溫柔","平易近人","穩重"],
    "trial": "heaven",
    "story": "孕婦難產而死"
  },
  {
    "name": "天狗",
    "img": "鬼怪\\天狗.png",
    "team": "blue",
    "Ttask": ["Male","Male","Female","Baby","Old"],
    "repeat": true,
    "order": false,
    "task": ["文質彬彬","正義正直"],
    "trial": "heaven",
    "story": "隱居山中修練"
  },
  {
    "name": "般若",
    "img": "鬼怪\\般若.png",
    "team": "red",
    "Ttask": ["Male","Female","Baby","Old"],
    "repeat": true,
    "order": true,
    "task": ["淫慾","狡猾多變","勢利"],
    "trial": "hell",
    "story": "由女人的忌妒心所形成"
  },
  {
    "name": "雪女",
    "img": "鬼怪\\雪女.png",
    "team": "red",
    "Ttask": ["Male","Female","Baby","Old"],
    "repeat": true,
    "order": true,
    "task": ["聰明伶俐","坦率","熱情"],
    "trial": "heaven",
    "story": "喜歡吸引男人，並取走其靈魂"
  },
  {
    "name": "鬼一口",
    "img": "鬼怪\\鬼一口.png",
    "team": "red",
    "Ttask": ["Male","Female","Baby","Old"],
    "repeat": true,
    "order": true,
    "task": ["陰險奸詐","貪婪","橫行霸道"],
    "trial": "hell",
    "story": "其象徵包容一切"
  },
  {
    "name": "九尾狐",
    "img": "鬼怪\\九尾狐.png",
    "team": "red",
    "Ttask": ["Male","Female","Baby","Old"],
    "repeat": true,
    "order": true,
    "task": ["安倍晴明"],
    "trial": null,
    "story": "善於誘惑，喜歡吃人"
  },
  {
    "name": "貓又",
    "img": "鬼怪\\貓又.png",
    "team": "red",
    "Ttask": ["Male","Female","Baby","Old"],
    "repeat": true,
    "order": true,
    "task": ["傲慢","擇善固執"],
    "trial": "hell",
    "story": "在男人夢中奪取男人的陽經"
  },
  {
    "name": "酒吞童子",
    "img": "鬼怪\\酒吞童子.png",
    "team": "red",
    "Ttask": ["Male","Female","Baby","Old"],
    "repeat": true,
    "order": true,
    "task": ["忠厚","心地善良","暴力"],
    "trial": "hell",
    "story": "勾引少女，並將其吃掉"
  },
  {
    "name": "安倍晴明",
    "img": "鬼怪\\安倍晴明.png",
    "team": "purple",
    "Ttask": null,
    "repeat": null,
    "order": null,
    "task": ["天狗","般若"],
    "trial":null,
    "story": "平衡陰陽間秩序"
  }
];
console.log(data)
/*fetch('example.json', {mode: 'no-cors'}).then(response => {
  console.log(response)
});*/

const selects = {
  team:{
    type:'string',
    text:'派別',
    items:[
      {
        text:'藍',
        value:'blue',
      },
      {
        text:'紅',
        value:'red',
      },
      {
        text:'紫',
        value:'purple',
      },
    ],
  },
  Ttask:{
    type:'string',
    text:'任務',
    items:[
        {
          text:'男',
          value:'Male',
        },
        {
          text:'女',
          value:'Female',
        },
        {
          text:'小孩',
          value:'Baby',
        },
        {
          text:'老人',
          value:'Old',
        },
      ],
    },
    repeat:{
      type:'boolean',
      text:'重複',
      items:[
        {
          text:'是',
          value:true,
        },
        {
          text:'否',
          value:false,
        },
      ],
    },
    order:{
      type:'boolean',
      text:'排序',
      items:[
        {
          text:'是',
          value:true,
        },
        {
          text:'否',
          value:false,
        },
      ],
    },
    trial:{
      type:'string',
      text:'團隊審判',
      items:[
        {
          text:'天堂',
          value:'heaven',
        },
        {
          text:'地獄',
          value:'hell',
        },
      ],
    },
};
const toShowColumns = [
  'name','team','Ttask','repeat','order','task','trial'
];
let filters = {
  name:null,
  img:null,
  team:null,
  Ttask:null,
  repeat:null,
  order:null,
  task:null,
  trial:null,
  story:null,
};
let mode;

function search(){
  let searched = data;
  /* 清空列表 */
  for(let i of document.querySelector('#list-body').querySelectorAll('tr')){
    document.querySelector('#list-body').removeChild(i);
  }
  /* 清空圖表 */
  for(let i of document.querySelector('#picture-content>div').querySelectorAll('div.card-div')){
    document.querySelector('#picture-content>div').removeChild(i);
  }

  /* 篩選資料 */
  for([key,value] of Object.entries(filters)){
    if((typeof value === 'string' && value.trim() !== '') || typeof value === 'boolean') {
			searched = searched.filter(x => {
				if(key === 'name' || key === 'Ttask') {
					return x[key] !== null && x[key].includes(value);
				} else {
					return x[key] === value;
				}
			});
		}
  }

  /* 從篩選完的資料中，根據mode產生相應的elements */
  for(let j of searched){
    if(mode === 'picture') {
      let colElement = document.createElement('div');
      colElement.classList.add('col-sm');
      colElement.classList.add('card-div');
      let btnElement = document.createElement('button');
      btnElement.classList.add('btn');
      btnElement.setAttribute('data-toggle', 'modal');
      btnElement.setAttribute('data-target', '#exampleModalCenter');
      let imgElement = document.createElement('img');
      imgElement.classList.add('card-img');
      imgElement.src = j.img;

      btnElement.appendChild(imgElement);
      colElement.appendChild(btnElement);
      document.querySelector("#picture-content>div").appendChild(colElement);
    } else {
      /* 先產生tr */
      let trElement = document.createElement('tr');

      /* 根據每筆資料(j)的各欄位 產生td */
      for([key,value] of Object.entries(j)) {
        if(toShowColumns.includes(key)) {
          let tdElement = document.createElement('td');
          if (value !== null) {
            if(key === 'team') {
              let imgElement = document.createElement('img');
              imgElement.src = `${value}.png`;
              imgElement.classList.add("team-img");
              tdElement.appendChild(imgElement);
            } else if (key === 'trial') {
              let imgElement = document.createElement('img');
              imgElement.src = `${value}.png`;
              imgElement.classList.add("trial-img");
              tdElement.appendChild(imgElement);
            } else if (key === 'repeat' || key === 'order') {
              let imgElement = document.createElement('img');
              if (value) {
                imgElement.src = `Yes.png`;
              }
              else{
                imgElement.src = `No.png`;
              }
              imgElement.classList.add("bool-img");
              tdElement.appendChild(imgElement);
            } else if (key === 'Ttask') {
              for(let i of value){
                let imgElement = document.createElement('img');
                imgElement.src = `${i}.png`;
                imgElement.classList.add("ttask-img");
                tdElement.appendChild(imgElement);
              }
            } else {
              tdElement.innerText = value;
            }
            if(key === 'name') {
              tdElement.classList.add("list-name");
              tdElement.setAttribute('data-img', j.img);
            }
          }
          trElement.appendChild(tdElement);
        }
      }
      document.querySelector('#list-body').appendChild(trElement);
    }

  }
}

function toggleMode(toChange) {
  if(toChange !== mode) {
    if(toChange === 'picture'){
      document.querySelector('#list-content').style.display = 'none';
      document.querySelector('#picture-content').style.display = 'initial';
      document.querySelector(`#picture-btn`).classList.add("active");
      document.querySelector(`#list-btn`).classList.remove("active");
    }else{
      document.querySelector('#list-content').style.display = 'initial';
      document.querySelector('#picture-content').style.display = 'none';
      document.querySelector(`#list-btn`).classList.add("active");
      document.querySelector(`#picture-btn`).classList.remove("active");
    }
    mode = toChange;
  }
}

window.addEventListener('DOMContentLoaded', function() {
  /* 產生篩選條件下拉選單 */
  for([key,value] of Object.entries(selects)){
    let tempElement = document.createElement('div');
    tempElement.innerText = value.text+':';
    let selectElement = document.createElement('select');
    const filterKey = key;
    const filterType = value.type;
    value.items.unshift({text:'',value:''});
    for(item of value.items){
      let optionElement = document.createElement('option');
      optionElement.innerText = item.text;
      optionElement.value = item.value;
      selectElement.appendChild(optionElement);
    }
    selectElement.addEventListener('change',function(){
      if([null,''].includes(this.value)) {
  			filters[filterKey] = null;
  		} else if(filterType == 'boolean') {
  			filters[filterKey] = this.value === 'true';
  		} else {
  			filters[filterKey] = this.value;
  		}
      search();
    });
    tempElement.appendChild(selectElement);
    document.querySelector('#filters').appendChild(tempElement);
  }

  /* 搜尋按鈕click事件 */
  document.querySelector('#search-btn').addEventListener('click',() => {
    const value = document.querySelector('#search-bar').value;
    filters.name = value;
    search();
  });
  /* 切換模式按鈕click事件 */
  document.querySelector(`#picture-btn`).addEventListener('click',() => {
    toggleMode('picture');
  });
  document.querySelector(`#list-btn`).addEventListener('click',() => {
    toggleMode('list');
  });

  /* 預設模式為picture */
  toggleMode('picture');
  search();
});
