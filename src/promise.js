class MyPromise {
  constructor (executor) {
    this.status = 'pending'
    this.data = ''
    this.resolveCallback = []
    this.rejectCallback = []
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }


  resolve(result) {
    setTimeout(() => {
      if (this.status === 'pending') {
        this.status = 'fullfilled'
        this.data = result
        for (let i = 0; i < this.resolveCallback.length; i++) {
          this.resolveCallback[i](result)
        }
      }
    })
  }

  reject(result) {
    setTimeout(() => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.data = result
        for (let i = 0; i < this.rejectCallback.length; i++) {
          this.rejectCallback[i](result)
        }
      }
    })
  }

  then (resolve, reject) {
    this.resolveCallback.push(resolve)
    this.rejectCallback.push(reject)
    return this
  }
}

export default MyPromise
