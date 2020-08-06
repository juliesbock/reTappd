import * as CheckinAPIUtil from '../util/checkin_util';
export const RECEIVE_ALL_CHECKINS = `RECEIVE_ALL_CHECKINS`;
export const RECEIVE_CHECKIN = `RECEIVE_CHECKIN`;
export const REMOVE_CHECKIN = `REMOVE_CHECKIN`;


const receiveAllCheckins = checkins => ({
  type: RECEIVE_ALL_CHECKINS,
  checkins
})

const receiveCheckin = checkin => ({
  type: RECEIVE_CHECKIN,
  checkin
})

const removeCheckin = id => ({
  type: REMOVE_CHECKIN,
  id
})

export const fetchAllCheckins = () => dispatch => {
  return CheckinAPIUtil.fetchAllCheckins()
    .then(checkins => dispatch(receiveAllCheckins(checkins)))
}

export const fetchCheckin = () => dispatch => {
  return CheckinAPIUtil.fetchCheckin()
    .then(checkin => dispatch(receiveCheckin(checkin)))
}

export const createCheckin = (checkin) => dispatch => {
  return CheckinAPIUtil.createCheckin(checkin)
    .then(checkin => dispatch(receiveCheckin(checkin)))
}

export const updateCheckin = (checkin) => dispatch => {
  return CheckinAPIUtil.updateCheckin(checkin)
    .then(checkin => dispatch(receiveCheckin(checkin)))
}

export const deleteCheckin = (checkinId) => dispatch => {
  return CheckinAPIUtil.deleteCheckin(checkinId)
    .then(() => dispatch(removeCheckin(checkinId)))
}
