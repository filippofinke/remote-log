echo "test.sh - Compiling..."
clang -framework Foundation main.m -o main
echo "test.sh - Running..."
./main
echo "test.sh - Removing compiled binary..."
rm main