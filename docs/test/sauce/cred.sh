#!/bin/bash

read -p "Enter your password: " SAUCEPASS
echo $SAUCEPASS> ~/.sauce-auth

echo Password saved.