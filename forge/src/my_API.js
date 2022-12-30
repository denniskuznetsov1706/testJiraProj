import api, { route, fetch} from "@forge/api";


export async function getAllProjects() {
    const res = await api.asUser().requestJira(route`/rest/api/3/project`);
    const data = await res.json();
    return data;
  }