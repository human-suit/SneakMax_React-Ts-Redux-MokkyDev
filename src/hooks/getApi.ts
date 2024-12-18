const getApi = async (api: string) => {
  let items_hist = "Error";
  try {
    await fetch(api)
      .then((res) => res.json())
      .then((json) => {
        items_hist = json;
        console.log(items_hist);
      });
  } catch (err: any) {
    console.log(err.message);
  }
  return items_hist;
};

export default getApi;
