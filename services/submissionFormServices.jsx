//Service to get all crop codes for the drop down in the submission form.
export const getAllCropCodes = async () => {
    return fetch(
        "http://localhost:8088/cropCodes"
  ).then((res) => res.json())
}
//Service to get all counties for the drop down in the submission form.
export const getAllCounties = async () => {
  return fetch(
      "http://localhost:8088/counties"
).then((res) => res.json())
}
//Service to get all tillage for the drop down in the submission form.
export const getAllTillageCodes = async () => {
  return fetch(
      "http://localhost:8088/tillageCodes"
).then((res) => res.json())
}
//Service to get all soil texture codes for the drop down in the submission form.
export const getAllSoilTextureCodes = async () => {
  return fetch(
      "http://localhost:8088/soilTextureCodes"
).then((res) => res.json())
}