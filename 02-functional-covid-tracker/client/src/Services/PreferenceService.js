export default{
    getPrefs: ()=>{
        return fetch('/user/preferences')
                .then(response =>{
                    if(response.status != 401){
                        return response.json().then(data=>data);
                    }else{
                        return {message:{msgBody:"UnAuthorized"},msgError:true};
                    }
                });
    },
    postPref : pref=>{
        return fetch('/user/preference',{
            method:'post',
            body:JSON.stringify(pref),
            headers:{
                'Content-Type':'applicatoin/json'
            }
        }).then(response=>{
            if(response.status != 401){
                return response.json().then(data=>data);
            }else{
                return {message:{msgBody:"Unauthorized"},msgError:true}
            }
        });
    }
}