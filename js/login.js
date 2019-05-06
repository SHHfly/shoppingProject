class Login{
    constructor(){
        this.nameInput = document.querySelector("#exampleInputEmail1");
        this.pwdInput = document.querySelector("#exampleInputPassword1");
        this.loginBtn = document.querySelector("#login");
        this.check = document.querySelector("#checkbox");
        this.init();
    }
    init(){
        this.loginBtn.onclick = ()=>{
            let username = this.nameInput.value;
            let password = this.pwdInput.value;
            if(username == "" || password == ""){
                alert("输入不能为空，请重试");
            }else{
                tools.ajax("POST","../api/v1/login.php",{username,password},data=>{
                
                    alert(data.res_message);
                    if(this.check.checked){
                        tools.cookie("username",username,{expires: 7, path: "/"})
                    }else{
                        tools.cookie("username",username,{path:"/"})
                    }
                    if(data.res_code === 1){
                        window.location.href = "../index.html";
                    }
                });
            }
            
        }

    }
}

new Login();