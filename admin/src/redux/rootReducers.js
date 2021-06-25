import { combineReducers } from 'redux'

// pengajuan reducers
import pengajuanReducer from './pengajuan/pengajuanReducer'

// user reducers
import userLoginReducer from './user/login/userLoginReducer'
import userProfileReducer from './user/profile/userProfileReducer'

// kategori reducers
import readKategoriReducers from './kategori/read/readKategoriReducer'

// pendanaan reducers
import readPendanaanReducers from './pendanaan/read/readPendanaanReducer'

const rootReducers = combineReducers({
	pengajuan: pengajuanReducer,
	userLogin: userLoginReducer,
	userProfile: userProfileReducer,
	readKategori: readKategoriReducers,
	readPendanaan: readPendanaanReducers
})

export default rootReducers
