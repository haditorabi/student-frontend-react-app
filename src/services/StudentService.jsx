import axios from "axios";

const getStudents = async () => {
  const {data} = await axios.get(process.env.REACT_APP_HATCHWAYS_API)
  return data
}
export default getStudents