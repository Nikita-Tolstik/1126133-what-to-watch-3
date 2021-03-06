
export const parseFilm = (film) => {

  return {
    id: film[`id`],
    title: film[`name`],
    posterImage: film[`poster_image`],
    previewImage: film[`preview_image`],
    backgroundImage: film[`background_image`],
    backgroundColor: film[`background_color`],
    description: film[`description`],
    rating: film[`rating`],
    scoresCount: film[`scores_count`],
    director: film[`director`],
    stars: film[`starring`],
    runTime: film[`run_time`],
    genre: film[`genre`],
    released: film[`released`],
    isFavorite: film[`is_favorite`],
    videoLink: film[`video_link`],
    videoPreview: film[`preview_video_link`],
  };
};

export const parseComment = (comment) => {
  return {
    id: comment[`id`],
    userName: comment[`user`][`name`],
    rating: comment[`rating`],
    comment: comment[`comment`],
    date: comment[`date`],
  };
};
