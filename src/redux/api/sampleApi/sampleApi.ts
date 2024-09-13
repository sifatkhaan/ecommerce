import { baseApi } from "../baseApi";

export const sampleApi = baseApi.injectEndpoints({
    endpoints: (build)=> ({
        sampleList : build.query({
            query: (arg: Record<string, any>)=>{
                return {
                    url:'',
                    method:'GET',
                    params:arg
                }
            }
        })
    })
});
export const {useSampleListQuery}=sampleApi;