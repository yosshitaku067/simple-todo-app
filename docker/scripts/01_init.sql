-- データベースの作成
create database todo_system;

\c todo_system

-- ロールの作成
create role todo_dev_user with login password 'tododevuser';

-- 権限の追加
alter role todo_dev_user with createdb;

