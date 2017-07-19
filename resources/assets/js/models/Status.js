class Status {
  static all(then) {
    return axios.get('../public/statuses')
    .then(({data}) => then(data));
  }
}

export default Status;
