
import csv

# Open the file, dirs.txt is just a place holder, ideally this gets changed to ask the user which file
lines = []
with open(".\dirs.txt", "r") as in_file:
# with open("VELVET_list[127025].txt", 'r') as in_file:
    for line in in_file:
        lines.append(line)

# Remove the excess 'fat' from the read-in file, split the string on '\' (directories), so that we get 
# a list of strings in a list
stripped = []
for line in lines:
    strip = line.strip('\n')
    strip = strip.split("\\")
    stripped.append(strip)

# In a later version, this could probably be reformatted
longest_path = 0
count = 1
for strip in stripped:
    # Remove the drive tag if it exists (If the user is using a absolute file path, this will trigger)
    if ":" in strip[0]:
        strip.pop(0)
    # This will be used for determining the amount of Headers to be written into the CSV, but they could
    # manually inserted in
    if len(strip) > longest_path:
        longest_path = len(strip)
    # Keep track of the file number if necessary
    strip.insert(0, count)
    count += 1


# Writing the Headers list as a default
headers = ["File Number"]
for i in range(longest_path):
    headers.append("Header {}".format(i + 1))

# Write the CSV file
with open("log.csv", "w", newline='') as out_file:
    writer = csv.writer(out_file)
    writer.writerow(headers)
    for strip in stripped:
        writer.writerow(strip)