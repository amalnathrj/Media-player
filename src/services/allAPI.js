import commonAPI from "./commonAPI";

export const uploadVideo = async (video)=>{
  return await commonAPI("post","/videos",video)
}

export const getvideo = async()=>{
    return await commonAPI("get","/videos","")
}

export const addHistory = async (videoDetails)=>{
return await commonAPI("post","/history",videoDetails)
}
export const getAllHistory = async()=>{
  return await commonAPI("get","/history","")
}

export const deleteHistory = async(id)=>{
  return await commonAPI("delete",`/history/${id}`,{})
}

export const deleteVideo = async(id)=>{
  return await commonAPI("delete",`/videos/${id}`,{})
}

export const createCategory = async(categoryDetails)=>{
  return await commonAPI("post","/categories",categoryDetails)
}

export const getCategoryApi = async()=>{
  return await commonAPI("get","/categories","") 
}

export const deleteCategory = async (id)=>{
  return await commonAPI("delete", `/categories/${id}`,{})
}
export const getSingleVideo =async(id)=>{
  return await commonAPI("get",`/videos/${id}`,{})
}
export const updateCatagoryVideo =async(id,catagoryDetails)=>{
  return await commonAPI("put",`/categories/${id}`,catagoryDetails)
}