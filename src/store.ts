import { makeAutoObservable } from 'mobx'


class State {
  count = 0
  inc(){
    this.count ++
  }
}

export let store = makeAutoObservable(new State)
