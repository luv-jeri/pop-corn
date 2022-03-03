import Cookie from 'js-cookie';

export default function look_cookie(
  name,
  ifYes,
  ifNo
) {
  if (Cookie.get(name)) {
    ifYes && ifYes();
  } else {
    ifNo && ifNo();
  }
}
