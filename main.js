// ここからJavaScriptを記述してください。
const config = {
  url:"https://api.recursionist.io/builder/computers?type=",

  target:"target",

  cpuBrand:"cpuBrand",
  cpuModel:"cpuModel",

  gpuBrand:"gpuBrand",
  gpuModel:"gpuModel",

  ramNumber:"ramNumber",
  ramBrand:"ramBrand",
  ramModel:"ramModel",

  storageType:"storageType",
  storageSize:"storageSize",
  storageBrand:"storageBrand",
  storageModel:"storageModel",
  
  addPc:"addPc",
  result:"result"
}

class PC{
  constructor(){
      this.cpuBrand = null;
      this.cpuModel = null;
      this.gpuBrand = null;
      this.gpuModel = null;
      this.ramBrand = null;
      this.ramModel = null;
      this.storageType = null;
      this.storageSize = null;
      this.storageBrand = null;
      this.storageModel = null;

      this.cpuBenchmark = null;
      this.gpuBenchmark = null;
      this.ramBenchmark = null;
      this.storageBenchmark = null;
  }
  static addBrand(parts, brand, pc){
      switch(parts){
        case "cpu":
          pc.cpuBrand = brand;
          break;
        case "gpu":
          pc.gpuBrand = brand;
          break;
        case "ram":
          break;
        case "hdd":
          pc.storageBrand = brand;
          break;
        case "ssd":
          pc.storageBrand = brand;
          break;
      }
  }
  static addModel(parts, model, pc){
      switch(parts){
        case "cpu":
          pc.cpuModel = model;
          break;
        case "gpu":
          pc.gpuModel = model;
          break;
        case "ram":
          break;
        case "hdd":
          pc.storageModel = model;
          break;
        case "ssd":
          pc.storageModel = model;
          break;
      }
  }
  static addStorageType(type, pc){
      pc.storageType = type;
  }
  static addStorageSize(size, pc){
      pc.storageSize = size;
  }
  static addBenchmark(parts, benchmark, pc){
      switch(parts){
        case "cpu":
          pc.cpuBenchmark = benchmark;
          break;
        case "gpu":
          pc.gpuBenchmark = benchmark;
          break;
        case "ram":
          pc.ramBenchmark = benchmark;
          break;
        case "hdd":
          pc.storageBenchmark = benchmark;
          break;
        case "ssd":
          pc.storageBenchmark = benchmark;
          break;
      }
  }
  static getGamingScore(pc){
      let cpuScore = parseInt(pc.cpuBenchmark * 0.25);
      let gpuScore = parseInt(pc.gpuBenchmark * 0.6);
      let ramScore = parseInt(pc.ramBenchmark * 0.125);
      let storageScore = pc.storageType === "ssd" ? parseInt(pc.storageBenchmark * 0.1) : parseInt(pc.storageBenchmark * 0.025);
      return cpuScore + gpuScore + ramScore + storageScore;
  }
  static getWorkingScore(pc){
      let cpuScore = parseInt(pc.cpuBenchmark * 0.6);
      let gpuScore = parseInt(pc.gpuBenchmark * 0.25);
      let ramScore = parseInt(pc.ramBenchmark * 0.1);
      let storageScore = parseInt(pc.storageBenchmark * 0.05);
      return cpuScore + gpuScore + ramScore + storageScore;
  }
}

class View{
  static createStartPage(pc){
      let target = document.getElementById(config.target);
      let container = document.createElement("div");

      container.innerHTML = 
      `
      <div class="p-2 bg-danger col-12 d-flex justify-content-center align-items-center">
      <h1 class="p-1 text-white text-center">Build Your Own Computer</h1>
      </div>
  
      <div class="m-2 p-2">
          <h3>step1: Select Your CPU</h3>
      </div>
      <div class="p-2 d-flex justify-content-start flex-column d-sm-flex flex-sm-row justify-content-sm-start align-items-sm-center">
          <h4>Brand</h4>
          <select class="mx-3 col-9 custom-select col-sm-3" id="cpuBrand">
              <option value="">-</option>
          </select>
          <h4>Model</h4>
          <select class="mx-3 col-9 custom-select col-sm-3" id="cpuModel">
              <option value="">-</option>
          </select>
      </div>

      <div class="m-2 p-2">
          <h3>step2: Select Your GPU</h3>
      </div>
      <div class="p-2 d-flex justify-content-start flex-column d-sm-flex flex-sm-row justify-content-sm-start align-items-sm-center">
          <h4>Brand</h4>
          <select class="mx-3 col-9 custom-select col-sm-3" id="gpuBrand">
              <option value="">-</option>
          </select>
          <h4>Model</h4>
          <select class="mx-3 col-9 custom-select col-sm-3" id="gpuModel">
              <option value="">-</option>
          </select>
      </div>

      <div class="m-2 p-2">
          <h3>step3: Select Your Memory Card</h3>
      </div>
      <div class="p-2 d-flex justify-content-start flex-column d-sm-flex flex-sm-row justify-content-sm-start align-items-sm-center">
          <h4>How many?</h4>
          <select class="mx-3 col-9 custom-select col-sm-1" id="ramNumber">
              <option>-</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
          </select>
          <h4>Brand</h4>
          <select class="mx-3 col-9 col-sm-3 custom-select" id="ramBrand">
              <option value="">-</option>
          </select>
          <h4>Model</h4>
          <select class="mx-3 col-9 col-sm-3 custom-select" id="ramModel">
              <option value="">-</option>
          </select>
      </div>

  
      <div class="m-2 p-2">
          <h3>step4: Select Your Storage</h3>
      </div>
      <div class="p-2 d-flex justify-content-start flex-column d-sm-flex flex-sm-row justify-content-sm-start align-items-sm-center">
          <h4>HDD or SSD</h4>
          <select class="mx-3 col-9 custom-select col-sm-2" id="storageType">
              <option value="">-</option>
              <option value="hdd">HDD</option>
              <option value="ssd">SSD</option>
          </select>
          <h4>Storage</h4>
          <select class="mx-3 col-9 col-sm-2 custom-select" id="storageSize">
              <option value="">-</option>
          </select>
          <h4>Brand</h4>
          <select class="mx-3 col-9 col-sm-2 custom-select" id="storageBrand">
              <option value="">-</option>
          </select>
          <h4>Model</h4>
          <select class="mx-3 col-9 col-sm-2 custom-select" id="storageModel">
              <option value="">-</option>
          </select>
      </div>
          <div>
              <button type="submit" class="my-3 ml-3 btn btn-primary col-2" id="addPc">Add PC</button>
          </div>
          <div id="result">
          </div>
      </div>
      `;
      target.append(container);
      let addPc = document.getElementById(config.addPc);
      addPc.addEventListener("click", function(){
          Controller.clickAddPC(pc);
      });
  }
  static createResultPage(count,pc){
      let result = document.getElementById(config.result);
      let container = document.createElement("div");
      let gamingScore = PC.getGamingScore(pc);
      let workingScore = PC.getWorkingScore(pc);

      container.innerHTML = 
      `
          <div class="d-flex flex-column bg-primary text-white p-3">
              <h4 class="p-3">Your PC ${count}</h4>
              <h4>CPU</h4>
              <p>Brand: ${pc.cpuBrand}</p>
              <p>Model: ${pc.cpuModel}</p>
              <h4>GPU</h4>
              <p>Brand: ${pc.gpuBrand}</p>
              <p>Model: ${pc.gpuModel}</p>
              <h4>RAM</h4>
              <p>Brand: ${pc.ramBrand}</p>
              <p>Model: ${pc.ramModel}</p>
              <h4>Storage</h4>
              <p>Disk: ${pc.storageType.toUpperCase()}</p>
              <p>Disk: ${pc.storageSize}</p>
              <p>Brand: ${pc.storageBrand}</p>
              <p>Model: ${pc.storageModel}</p>
          </div>

          <div class="d-flex flex-row justify-content-center bg-success">
              <h4 class="p-2">Gaming: ${gamingScore}%</h4>
              <h4 class="p-2">Work: ${workingScore}%</h4>
          </div>
      `
      result.append(container)
  }
}

class Controller{
  static count = 0;

  static startBuilding(){
      const pc = new PC;
      View.createStartPage(pc);
      Controller.getAllData(pc);
  }

  static getAllData(pc){
      let cpuBrand = document.getElementById(config.cpuBrand);
      let cpuModel = document.getElementById(config.cpuModel);
      let gpuBrand = document.getElementById(config.gpuBrand);
      let gpuModel = document.getElementById(config.gpuModel);
      let ramBrand = document.getElementById(config.ramBrand);
      let ramModel = document.getElementById(config.ramModel);
      let ramNumber = document.getElementById(config.ramNumber);
      let storageBrand = document.getElementById(config.storageBrand);
      let storageModel = document.getElementById(config.storageModel);

      Controller.getBrandData("cpu",cpuBrand,cpuModel,pc);
      Controller.getBrandData("gpu",gpuBrand,gpuModel,pc)
      Controller.getRamBrand(ramNumber,ramBrand,ramModel,pc);
      Controller.getStorageData(storageBrand,storageModel,pc);
  }
  static getBrandData(parts,brandSelect,modelSelect,pc){
      fetch(config.url + parts).then(response=>response.json()).then(data=>{
          let brandHash = this.getBrand(data);
          brandSelect.innerHTML = `<option value="">-</option>`
          for(let brand in brandHash){
              let option = document.createElement("option");
              option.value = brandHash[brand];
              option.innerText = brandHash[brand];
              brandSelect.append(option);
          }
          brandSelect.addEventListener("change",function(){
              PC.addBrand(parts,brandSelect.value,pc);
              Controller.getModelData(parts,brandSelect,modelSelect,pc)
          })
      })
  }

  static getModelData(parts,brandSelect,modelSelect,pc){
      fetch(config.url + parts).then(response=>response.json()).then(data=>{
          let modelHash = Controller.getModel(data);
          if(parts === "cpu" || parts === "gpu"){
              modelSelect.innerHTML = `<option value="">-</option>`
              for(let i in modelHash[brandSelect.value]){
                  let option = document.createElement("option");
                  option.value = modelHash[brandSelect.value][i];
                  option.innerText = modelHash[brandSelect.value][i];
                  modelSelect.append(option);
              }
          }
          if(parts === "ram"){
              modelSelect.innerHTML = `<option value="">-</option>`
              for(let i in modelHash[brandSelect.value]){
                  if(modelHash[brandSelect.value][i].indexOf(ramNumber.value) !== -1){
                    let option = document.createElement("option");
                    option.value = modelHash[brandSelect.value][i];
                    option.innerText = modelHash[brandSelect.value][i];
                    modelSelect.append(option);
                  }
              }
          }
          if(parts === "hdd" || parts === "ssd"){
              modelSelect.innerHTML = `<option value="">-</option>`;
              for(let i in modelHash[brandSelect.value]){
                if(modelHash[brandSelect.value][i].indexOf(storageSize.value) !== -1){
                  let option = document.createElement("option");
                  option.value = modelHash[brandSelect.value][i];
                  option.innerText = modelHash[brandSelect.value][i];
                  modelSelect.append(option);
                }
              }
            }
          modelSelect.addEventListener("change", function(){
              PC.addModel(parts, modelSelect.value, pc);
              Controller.getBenchmarkData(parts, modelSelect.value, pc);
          })
      })
  }

  static getRamData(brandSelect, modelSelect, pc){
      let ramNumber = document.getElementById(config.ramNumber)
      ramNumber.addEventListener("chagne", function(){
          Controller.getRamBrand(brandSelect, modelSelect, pc);
      })
  }

  static getBrand(data){
      let brandHash = {};
      for(let i in data){
        let current = data[i];
        if(brandHash[current.Brand] == undefined)brandHash[current.Brand] = current.Brand;
      }
      return brandHash;
  }

  static getModel(data){
      let modelHash = {};
      for(let i in data){
        let current = data[i];
        if(modelHash[current.Brand] == undefined)modelHash[current.Brand] = [current.Model];
        else{
          modelHash[current.Brand].push(current.Model);
        }
      }
      return modelHash;
  }


  static getRamBrand(ramNumber,ramBrand, ramModel, pc){
      ramNumber.addEventListener("change", function(){
        Controller.getBrandData("ram", ramBrand, ramModel, pc);
      })
  }

  static getStorageData(storageBrand,storageModel,pc){
      let storageType = document.getElementById(config.storageType);
      let storageSize = document.getElementById(config.storageSize);
      storageType.addEventListener("change",function(){
          PC.addStorageType(storageType.value,pc);
          storageBrand.innerHTML = `<option value="">-</option>`
          fetch(config.url + storageType.value).then(response=>response.json()).then(data=>{
              let storageSizeData = Controller.getStorageSize(data);
              storageSize.innerHTML = `<option value="">-</option>`;
              for(let i in storageSizeData){
                  let option = document.createElement("option");
                  option.value = storageSizeData[i];
                  option.innerText = storageSizeData[i];
                  storageSize.append(option);
              }
          })
      })
      storageSize.addEventListener("change", function(){
          Controller.getBrandData(storageType.value, storageBrand, storageModel, pc);
          PC.addStorageSize(storageSize.value, pc);
      })
  }

  static getStorageSize(data){
      let sizeTB = [];
      let sizeGB = [];
      for(let i in data){
        let currentModel = data[i]["Model"];
        if(currentModel.indexOf("TB") !== -1){
          let storage = parseInt(currentModel.match(/\d*[TB]B/g).pop().replace("TB", ""));
          if(!sizeTB.includes(storage)){
            sizeTB.push(storage);
          }   
        }
        if(currentModel.indexOf("GB") !== -1){
          let storage = parseInt(currentModel.match(/\d*[GB]B/g).pop().replace("GB", ""));
          if(!sizeGB.includes(storage)){
            sizeGB.push(storage);
          }
        }
      }
      sizeTB.sort(
        function(a, b){
          return b - a;
        }
      );
      sizeGB.sort(
        function(a, b){
          return b - a;
        }
      );
        
      sizeTB = sizeTB.map(x => x.toString() + "TB");
      sizeGB = sizeGB.map(x => x.toString() + "GB");
      return sizeTB.concat(sizeGB);
  }

  static async getBenchmarkData(parts, model, pc){
      const res = await fetch(config.url + parts);
      const data = await res.json();
      let benchmark = Controller.getBenchmark(data, model);
      PC.addBenchmark(parts, benchmark, pc);
  }
  
  static getBenchmark(data,model){
    let benchmark = 0;
    for(let i in data){
      if(data[i]["Model"] === model){
        benchmark = parseInt(data[i]["Benchmark"]);
        break;
      }
    }
    return benchmark;
  }

  static clickAddPC(pc){
      let cpuBrandValue = document.getElementById(config.cpuBrand).value;
      let cpuModelValue = document.getElementById(config.cpuModel).value;
      let gpuBrandValue = document.getElementById(config.gpuBrand).value;
      let gpuModelValue = document.getElementById(config.gpuBrand).value;
      let ramBrandValue = document.getElementById(config.ramBrand).value;
      let ramModelValue = document.getElementById(config.ramModel).value;
      let storageSizeValue = document.getElementById(config.storageSize).value;
      let storageTypeValue = document.getElementById(config.storageType).value;
      let storageBrandValue = document.getElementById(config.storageBrand).value;
      let storageModelValue = document.getElementById(config.storageModel).value;

      if(cpuBrandValue === "" || cpuModelValue === "" || gpuBrandValue === "" || gpuModelValue === "" || ramBrandValue === "" || ramModelValue === "" || storageSizeValue === "" || storageTypeValue === "" || storageBrandValue === "" || storageModelValue === ""){
          window.alert("Please select all parts!");
      }
      else{
          this.count ++;
           
          View.createResultPage(this.count, pc);
     
      }
  }
}

Controller.startBuilding();