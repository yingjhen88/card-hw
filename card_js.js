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
    "story": "人們為了減輕家裡負擔，將多出來的小孩用石臼壓死，並將埋在土間的廚房下面的習俗，可能由於大雨或地震使小孩的殘骸暴露出來被外人看到，家人為了掩蓋事實即說是座敷童子出現。"
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
    "story": "東日本指河童是雕刻名匠左甚五郎所製作之芻靈或陰陽師所作之紙人偶用咒術賦予生命後的產物。西日本，在熊本縣的「河童渡來之碑」記載中，寫道大約1500年前從中國黃河游泳過來的「河伯」在日本被稱為「河童」。"
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
    "story": "唐傘小僧，是日本神話傳說中的一種妖怪，屬於付喪神的一種。付喪神為日本的妖怪傳說概念。意指器物放置不理100年，每天吸收天地精華、積聚怨念或感受佛性、靈力而得到靈魂，化成為妖怪。"
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
    "story": "貘是從中國傳到日本的一種傳說生物。據說以吃掉人的夢為生，這裡的夢不是指將來的希望，而是睡眠時做的夢。有時在夢見噩夢後說「給貘吧」，意思是說不希望再次夢到這種事。"
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
    "story": "古代的日本，有把難產而死的孕婦的肚子剖開，取出小孩後，讓婦女抱著小孩下葬的習俗。妖怪產女抱著嬰兒的形象便是由此而來。"
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
    "story": "天狗在日本民間傳說中常出現，但不是可怕的角色，而是容易受到人類欺騙和迷惑的存在。"
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
    "story": "般若來歷是女人因為忌妒心，而導致自己的靈魂在自己活著的情況下離開自己身體，並且靈魂能攻擊甚至殺死自己忌妒的人。"
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
    "story": "雪女是日本傳說中的妖怪，她是山神的女兒，掌管冬季的雪，有時會以雪球的形狀出現。興趣是吸引男人，並取走其靈魂"
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
    "story": "原是鬼神化的的山神，起源在雷電交加的山上，一名女性不知被什麼追趕著在深山中，最終被吞食後成為現在鬼一口的模樣。"
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
    "story": "狐狸的尾巴是儲存它修煉所吸收靈氣的地方。當功力見長，靈氣足夠多時，其尾巴就會一分為二。狐狸擁有九條尾巴的時候，將會擁有不死隻身，噴火等。"
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
    "story": "曾出現貓又將人殺死並吃掉，便可以幻化成該人外型的故事。也有傳說雌貓有時會在男人的夢出現，奪取其陽精。"
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
    "story": "曾是勤勤懇懇的小和尚，但因師兄弟忌妒而被排擠陷害，他為人老實，喜歡憋在心裡導致心病產生，最後成了心魔，整個人就變成的妖怪。"
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
    "story": "他最為人所知的出生傳說,是人狐相戀的異種婚嫁。他天生就能夠看到惡鬼或怨靈。並預言花山天皇的讓位而名聲大噪，這也是忠行後來將陰陽道的深奧道理傾囊相授給他的原因之一。"
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
      text:'個人審判',
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
let modal_pic = '';

function dataFilter() {
  let result = data;
  /* 篩選資料 */
  for([key,value] of Object.entries(filters)){
    if((typeof value === 'string' && value.trim() !== '') || typeof value === 'boolean') {
			result = result.filter(x => {
				if(key === 'name' || key === 'Ttask') {
					return x[key] !== null && x[key].includes(value);
				} else {
					return x[key] === value;
				}
			});
		}
  }
    return result;
}

function switchModalContent(data) {
  if(modal_pic !== data.name) {
    let imgElement = document.querySelector("#exampleModalCenter .modal-body img");
    imgElement.src = data.img;
    let titleElement = document.querySelector("#exampleModalCenter .modal-body #card-content h3");
    titleElement.innerText = data.name;
    modal_pic = data.name;
    let contentElement = document.querySelector("#exampleModalCenter .modal-body #card-content p");
    let teamimg = document.querySelector("#exampleModalCenter .modal-body #card-content #team-img");
    teamimg.src= `${data.team}.png`;
    contentElement.innerText = data.story;
  }
}

function search(){
  /* 清空列表 */
  for(let i of document.querySelector('#list-body').querySelectorAll('tr')){
    document.querySelector('#list-body').removeChild(i);
  }
  /* 清空圖表 */
  for(let i of document.querySelector('#picture-content>div').querySelectorAll('div.card-div')){
    document.querySelector('#picture-content>div').removeChild(i);
  }

  searched = dataFilter();

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
      btnElement.addEventListener('click', function() {
        switchModalContent(j);
      })
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
    search();
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

  /* prev按鈕click事件 */
  document.querySelector("#exampleModalCenter .modal-prev button").addEventListener('click',() => {
    let data = dataFilter();
    let prevIndex = data.findIndex(x => x.name == modal_pic)-1;
    if(prevIndex >= 0) {
      switchModalContent(data[prevIndex]);
    }
  });
  /* next按鈕click事件 */
  document.querySelector("#exampleModalCenter .modal-next button").addEventListener('click',() => {
    let data = dataFilter();
    let nextIndex = data.findIndex(x => x.name == modal_pic)+1;
    if(nextIndex < data.length) {
      switchModalContent(data[nextIndex]);
    }
  });

  /* 預設模式為picture */
  toggleMode('picture');
  search();
});
