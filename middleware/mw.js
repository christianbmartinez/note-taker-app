// Custom middleware that logs out the type and path of each request to the server
const mw = (req, res, next) => {
  const fgCyan = '\x1b[36m'
  const fgRed = '\x1b[31m'
  const fgGreen = '\x1b[32m'
  switch (req.method) {
    case 'GET': {
      console.info(`${fgGreen}${req.method} request to ${req.path}`)
      break
    }
    case 'POST': {
      console.info(`${fgCyan}${req.method} request to ${req.path}`)
      break
    }
    case 'DELETE': {
      console.info(`${fgRed}${req.method} request to ${req.path}`)
      break
    }
    default:
      console.log(`${fgCyan}${req.method} request to ${req.path}`)
  }

  next()
}

exports.mw = mw
