#define REMOTE_LOG_IP "127.0.0.1"
#include "../RemoteLog.h"

int main(int argc, char** argv)
{
    NSString *testString = @"This is a NSString";
    RLog(testString);

    int i = 120;
    RLog(@"int i = %d;", i);
}