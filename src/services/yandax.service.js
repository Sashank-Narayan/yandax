import http from "../http-common.js";

class YandaxDataService{
    getAll() {
        return http.get("/yandax");
      }
    
      get(id) {
        return http.get(`/yandax/${id}`);
      }
    
      create(data) {
        return http.post("/yandax", data);
      }
    
      update(id, data) {
        return http.put(`/yandax/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`/yandax/${id}`);
      }
    
      deleteAll() {
        return http.delete(`/yandax`);
      }
    
      findByTitle(title) {
        return http.get(`/yandax?title=${title}`);
      }

}
export default new YandaxDataService();