import { myRequest } from './api.js'

//创建公司
export function addCompany(data){
	return myRequest ({
		url:'/recruitemt/recruitment-company/addCompany',
		method:'POST',
		data:data	
	})
}

//修改公司信息
export function updateCompany(data){
	return myRequest ({
		url:'/recruitemt/recruitment-company/updateCompany',
		method:'POST',
		data:data	
	})
}

//按条件查公司信息
export function findCompany(data){
	return myRequest ({
		url:'/recruitemt/recruitment-company/findCompany',
		method:'POST',
		data:data	
	})
}