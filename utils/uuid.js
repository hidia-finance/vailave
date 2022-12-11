export function uuid () {
  const randomNumber = Math.floor(Math.random() * 1000000)

  // Get the current timestamp
  const timestamp = Date.now()

  // Concatenate the random number and timestamp to create a unique ID
  return `${randomNumber}${timestamp}`
}

export default uuid