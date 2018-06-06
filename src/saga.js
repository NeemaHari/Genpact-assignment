import saga from './sagas/saga';

export default function* indexSaga() {
  yield [
    saga(),
  ];
}
