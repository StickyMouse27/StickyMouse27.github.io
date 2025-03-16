---
title: 一些有用的c++函数
date: 2025-03-16 13:36:42
tags: c++
categories: 技术
---

## 二分答案

```c++
/// @brief 二分答案
/// @tparam T 数字类型
/// @param l 左初始值
/// @param r 右初始值
/// @param check 检查答案在左还是右的函数，若true则向右移动，否则向左移动
/// @param reverseAns 是否反转答案
/// @return 答案
template <typename T>
T ba(T l, T r, bool (*check)(T), bool reverseAns = false)
{
    T m = 0, ans = 0;
    while (r >= l)
    {
        m = l >> 1 + r >> 1;

        // cout<<"l: "<<l<<" r: "<<r<<" m: "<<m<<endl;

        if (check(m))
        {
            ans = reverseAns ? ans : m;
            l = m + 1;
        }
        else
        {
            ans = reverseAns ? m : ans;
            r = m - 1;
        }
    }

    return ans;
}

```