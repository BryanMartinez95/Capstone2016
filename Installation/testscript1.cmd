setx PATH "%PATH%;C:\Program Files (x86)\MySQL\MySQL Server 5.7\bin" /M
CD c:\RecursiveDelegation
redis\redis-server --service-install redis.windows.conf --loglevel verbose
redis\redis-server --service-start
MD C:\RecursiveDelegation\WatchMeCapstone
MD C:\RecursiveDelegation\WatchMeCapstone\Archived
MD C:\RecursiveDelegation\WatchMeCapstone\Error
MD C:\RecursiveDelegation\WatchMeCapstone\New
echo complete!
pause
