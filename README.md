# FaceBeauty And Love Calculator

This programme use the Microsoft [Face API](https://azure.microsoft.com/en-us/services/cognitive-services/face/?v=18.09) 

# Requirements

- Python 3.5 or higher
- Microsoft FaceAPI
- virtuaenv

# Setup 

Install virtual env on you system

```terminal
$ pip install virtualenv
```   
After installing this cd to faceBeauty
```cmd
$ cd faceBeauty
```

and then create virtual environment
```terminal
$ virtualenv env
``` 

and activate the virtual environment

## Windows
```cmd
$ cd env/Scripts
```
```cmd
$ activate
```

## Linux / MacOS
```terminal
$ source env/lib/activate
```

after activating environment install all the dependencies 

```terminal
$ pip install -r requirment.txt
```

after install the requirment get you api key form Microsoft [FaceAPI](https://azure.microsoft.com/en-us/services/cognitive-services/face/?v=18.09)

and put the Microsoft [FaceAPI](https://azure.microsoft.com/en-us/services/cognitive-services/face/?v=18.09) key in 
faceBeauty.py file 

```python
#your FaceAPI key here
faceAPIKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

now run the server
```terminal
$ python faceBeauty.py
```

and your server is running on
```terminal
$ python3 faceBeauty.py

 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 153-105-362

```
now open your browser and type the following url http://127.0.0.1:5000 and you application will be start 