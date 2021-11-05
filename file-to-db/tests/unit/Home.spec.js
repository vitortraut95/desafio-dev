import Home from '@/components/Home.vue'

describe('Home', () => {
  it('Check Method onChangeFileUpload', () => {
    const context = {
      $refs: {
        file: {
          files: ['fileParam']
        }
      },
      form: {
        file: ''
      }
    }
    Home.methods.onChangeFileUpload.call(context)
    expect(context.form.file).toEqual('fileParam')
  })

  it('Check Method onSubmit', () => {
    window.alert = () => {}
    const context = {
      onReset: jest.fn(),
      form: {
        file: 'testFile'
      }
    }
    const event = {
      preventDefault: jest.fn()
    }
    Home.methods.onSubmit.call(context, event)
    expect(context.onReset).toHaveBeenCalledTimes(1)

    context.form.file = ''
    Home.methods.onSubmit.call(context, event)
    expect(context.onReset).toHaveBeenCalledTimes(1)
  })

  it('Check Method onReset', () => {
    window.alert = () => {}
    const context = {
      $nextTick: jest.fn(),
      onReset: jest.fn(),
      form: {
        file: 'testFile'
      }
    }
    const event = {
      preventDefault: jest.fn()
    }
    Home.methods.onReset.call(context, event)
    expect(event.preventDefault).toHaveBeenCalledTimes(1)
    expect(context.form.file).toEqual('')
  })
})
