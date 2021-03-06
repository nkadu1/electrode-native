// @flow
import type { Publisher } from './Publisher'

export default class UnKnownPublisher implements Publisher {
  _name = `UnKnownPublisher`

  get name (): string {
    return this._name
  }

  get url (): string {
    return 'unknown_url'
  }

  async publish () {
    log.warn('I am unknown, I don\'t know how to publish')
  }
}
