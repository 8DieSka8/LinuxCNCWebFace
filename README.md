# LinuxCNC + websocketd + halcmd
Just an example of **websocketd** + **halcmd** usage.

# Installation
* Copy files from **linuxcnc** to your **/home/{USER}/linuxcnc** folder.
* Make **websocketd** executable

# Usage
* Run **LinuxCNC**
* Run **websocketd** like
`/home/{USER}/linuxcnc/websocketd --staticdir=/home/{USER}/linuxcnc/ halcmd -f`
* Run web browser and open the page http://localhost/
