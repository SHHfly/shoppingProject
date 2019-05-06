class Register{
    constructor(){
        this.nameInput = document.querySelector("#exampleInputEmail1");
        this.pwdInput = document.querySelector("#exampleInputPassword1");
        this.regBtn = document.querySelector("#register");
        this.init();
    }
    init(){
        this.regBtn.onclick = ()=>{
            let username = this.nameInput.value,
                password = this.pwdInput.value;
                if(username == "" || password == ""){
                    alert("输入不能为空，请重试");
                }else{
                    tools.ajax("POST","../api/v1/register.php",{username,password},data=>{
                
                        alert(data.res_message);
                    
                    });
                }
            
            return false;
        }
    }
}

new Register();