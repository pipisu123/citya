import { myRequest } from '../api.js'

// 购买积分
export function buyIntegral(data){
	return myRequest ({
		url:'utils/userIntegral/buyIntegral',
		method:'POST',
		data:data	
	})
}