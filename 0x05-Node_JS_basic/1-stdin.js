if (require.main === module) {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');

  process.stdin.on('data', (data) => {
    const input = data.toString().trim(); // Trim to remove leading/trailing whitespaces

    if (input) {
      process.stdout.write(`Your name is: ${input}\n`);
    } else {
      process.stdout.write('You did not enter a name. This important software is now closing.\n');
    }

    // Check if input is coming from a terminal (TTY)
    if (!process.stdin.isTTY) {
      process.stdout.write('This important software is now closing.\n');
      process.exit();
    }

    process.stdin.pause(); // Close the standard input stream
  });
}
