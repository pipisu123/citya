 // 检查用户名
    check_username: function (){
            var len = this.username.length;
            if(len<5||len>20) {
                this.error_name_message = '请输入5-20个字符的用户名';
                this.error_name = true;
            } else {
                this.error_name = false;
            }
            // 检查重名
            if (this.error_name == false) {
                axios.get(this.host + '/usernames/' + this.username + '/count/', {
                        responseType: 'json'
                    })
                    .then(response => {
                        if (response.data.count > 0) {
                            this.error_name_message = '用户名已存在';
                            this.error_name = true;
                        } else {
                            this.error_name = false;
                        }
                    })
                    .catch(error => {
                        console.log(error.response.data);
                    })
            }
        },
		// 检查手机号
		    check_phone: function (){
		            var re = /^1[345789]\d{9}$/;
		            if(re.test(this.mobile)) {
		                this.error_phone = false;
		            } else {
		                this.error_phone_message = '您输入的手机号格式不正确';
		                this.error_phone = true;
		            }
		            if (this.error_phone == false) {
		                axios.get(this.host + '/mobiles/'+ this.mobile + '/count/', {
		                        responseType: 'json'
		                    })
		                    .then(response => {
		                        if (response.data.count > 0) {
		                            this.error_phone_message = '手机号已存在';
		                            this.error_phone = true;
		                        } else {
		                            this.error_phone = false;
		                        }
		                    })
		                    .catch(error => {
		                        console.log(error.response.data);
		                    })
		            }
		        },