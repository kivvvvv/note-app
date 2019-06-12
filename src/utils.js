import moment from "moment";

export function getLastUpdatedText(timestamp) {
  return `Last updated ${moment(timestamp).fromNow()}`;
}

export function getDescriptiveDate(timestamp) {
  return moment(timestamp).format("ddd, D MMM YYYY, h:mmA");
}

export function getShortenDate(timestamp) {
  return moment(timestamp).format("YYYY-MM-DD, HH:mm");
}
