
let data = [];

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
  trial:null,
  task:null,
  story:null,
};
let mode;
let modal_pic = '';

async function fetchData() {
  return await fetch('example.json').then(response => {
    if(response.ok) {
      return response.json();
    } else {
      return [];
    }
  }).catch(e => {
    console.log(e);
    return [];
  });
}

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
  let p = 0;
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
              let popElement = document.createElement('img');
              popElement.classList.add("pop-container");
              popElement.src = j.img;
              tdElement.addEventListener('mouseover', function() {
                this.querySelector('img').style.display = 'initial';
              });
              tdElement.addEventListener('mouseleave', function() {
                this.querySelector('img').style.display = 'none';
              });
              tdElement.appendChild(popElement);
              // tdElement.setAttribute('data-img', j.img);
            }
          }
          trElement.appendChild(tdElement);
        }
      }
      p++;
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

window.addEventListener('DOMContentLoaded', async function() {
  data = await fetchData();
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
