### Improve you Go programming skills by developing three different projects.

link: https://www.youtube.com/watch?v=k_V5VvYSlS4


## first project go health checker
sys.design of go-healthcheck
                                    -> Domain
main.go       CLI Package     Flags 
                   ⬇️       ↗       -> Port
             Main Function  ↘
                              Actions -> Check()
        Destination  Port
                ↘   ↙
check.go        Check -> dialTimeOut -> Status (up or down)

## second project