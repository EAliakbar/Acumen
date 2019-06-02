# Enabling Accounting

this readme assumes you are using the mikrotik default subnet of 192.169.88.0/24 with the mikrotik router on 192.168.88.1.  Please adjust as required.


## Choosing Right Threshold
TODO

## Using GUI
TODO

## Using command-line
Enter following commands to enable Accounting on your Mikrotik router

```
/ip accounting
set account-local-traffic=no enabled=yes threshold=2560
/ip accounting web-access
set accessible-via-web=yes
```
(Optional) if you want to limit access you can use this command
(XX is the IP of the Windows machine where `Collector` will run)
```
set accessible-via-web=yes address=192.168.88.XX/32
```

## Checking
check on http://192.168.88.1/accounting/ip.cgi that it works (from specified machine if you have limited access)

