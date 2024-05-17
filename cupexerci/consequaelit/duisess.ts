interface Options {
  c?: string;
}

function processInput(options: Options) {
  // If 'c' is provided, use it; otherwise, default to an empty string
  const cValue = options.c ?? '';
  // Further processing can be done here
}
