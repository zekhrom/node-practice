let Task1 = (() => {
  process.stdin.on('data', data => {
    const input = data.toString();
    let output = '';
    for (let i = 0; i < input.length; i++) {
      output = input[i] + output;
    }
    process.stdout.write(output);
  });
});

export default Task1;