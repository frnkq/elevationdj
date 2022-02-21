export const Routes = {
  sortPlaylist: function () {
    return {
      path: `${process.env.apiUrl.concat("sortPlaylist")}`,
      method: "POST",
    };
  },
};

export default Routes;
