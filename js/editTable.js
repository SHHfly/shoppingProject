class EditTable{
    constructor(tbody){
        this.tbody = document.querySelector(tbody);
        this.bindEvent();
    }
    bindEvent(){
        this.tbody.onclick = e =>{
            let target = e.target;
            let tr = target.parentNode.parentNode;
            let targetList = Array.from(target.classList);
            if(targetList.includes("btn-edit")){
                this.editBtnClick(tr);
            }else if(targetList.includes("btn-ok")){
                this.okBtnClick(tr);
            }else if(targetList.includes("btn-del")){
                this.delBtnClick(tr);
            }else if(targetList.includes("btn-cancel")){
                this.cancelBtnClick(tr);
            }
        }
    }
    editBtnClick(tr){
        Array.from(tr.querySelectorAll("span")).forEach( span =>{
            span.nextElementSibling.value = span.innerHTML;
        })
        tr.classList.add("edit");
    }
    cancelBtnClick(tr){
        tr.classList.remove("edit");
    }
    delBtnClick(tr){
        let id = tr.getAttribute("data-id");
        if(confirm("真的要删除吗？")){
            tools.ajaxGetPromise("api/v1/delete.php",{id}).then(data=>{
                if(data.res_code === 1){
                    alert(data.res_message);
                    tr.remove();
                }else{
                    alert(data.res_message);
                }
            })
        }
    }
    okBtnClick(tr){
        let id = tr.getAttribute("data-id");
        let priceInput = tr.querySelector(".inputPrice");
        let numInput = tr.querySelector(".inputNum");
        let price = priceInput.value;
        let num = numInput.value;
        tools.ajaxGetPromise("api/v1/ok.php",{id,price,num}).then(data=>{
            if(data.res_code === 1){
                alert(data.res_message);
                priceInput.previousElementSibling.innerHTML = price;
                numInput.previousElementSibling.innerHTML = num;
                tr.classList.remove("edit");
            }else{
                alert(data.res_message);
            }
        })
    }
}

let editTable = new EditTable("#tbody");