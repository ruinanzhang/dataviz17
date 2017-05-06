import pandas as pd
import matplotlib.pyplot as plt
import numpy
import matplotlib.colors as mcolors
import matplotlib.pyplot as plt
import seaborn

seaborn.set(style='white')

funds = numpy.sqrt([928394, 74])
cp = seaborn.color_palette('GnBu_d', n_colors=len(funds))

fig, ax = plt.subplots()

for n, p in enumerate(funds):

    circle = plt.Circle((1, p), radius=p, facecolor=cp[n])
    ax.add_artist(circle)

ax.set_xlim(-max(funds), max(funds))
ax.set_ylim(0, 2 * max(funds))
ax.set_aspect('equal')

plt.show()

fig.savefig("fundinf_chart.pdf", transparent=False)