let delay = 100;
let spinner = '|/-\\|/-\\|/-\\|/-\\|';

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '  ');
  }, delay);
  delay += 200;
}