#Middle work for comprehension
import json

#open file
f = open("VELVET_list[127025].txt", 'r')

#read from file
lines = f.readlines()


""" for line in lines:
    print(line) """

jsonify = []

#convert to json
for line in lines:
    x = {"fpath": line}
    jsonify.append(x)

y = json.dumps(jsonify)

#write to json file

j = open("stuff.json", "w")
print("opened file for writing")
j.write(y)

#close file

f.close()