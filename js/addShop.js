class AddShop{
    constructor(){
        this.inputName = document.querySelector("#inputName");
        this.inputPrice = document.querySelector("#inputPrice");
        this.inputNum = document.querySelector("#inputNum");
        this.addBtn = document.querySelector("#btn-shop-add");
        this.container = document.querySelector("#myModal");
        this.bindEvent();
    }
    bindEvent(){
        this.addBtn.onclick = ()=>{
            let name = this.inputName.value,
                price = this.inputPrice.value,
                num = this.inputNum.value;
            tools.ajaxGetPromise("api/v1/add.php",{name,price,num}).then(data=>{
                if(data.res_code === 1){
                    alert(data.res_message);
                    getShop.init();
                    this.inputName.value = "";
                    this.inputPrice.value = "";
                    this.inputNum.value = "";
                    $('#myModal').modal('hide');
                }else{
                    alert(data.res_message);
                }
            })
        }
    }
}

let addShop = new AddShop();