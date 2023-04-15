#!/usr/bin/python3
import MySQLdb
import sys

if __name__ == '__main__':
    username = sys.argv[1]
    password = sys.argv[2]
    db_name = sys.argv[3]

    # connect to MySQL server
    db = MySQLdb.connect(host='localhost', port=3306,
                         user=username, passwd=password, db=db_name)

    # create cursor object
    cursor = db.cursor()

    # execute SQL query
    cursor.execute('SELECT * FROM states ORDER BY states.id ASC')

    # fetch all rows and print them
    rows = cursor.fetchall()
    for row in rows:
        print(row)

    # close cursor and database connection
    cursor.close()
    db.close()
